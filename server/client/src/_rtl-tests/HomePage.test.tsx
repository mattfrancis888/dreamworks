import Root from "Root";
import React from "react";
import Body from "components/Body";
import "@testing-library/jest-dom/extend-expect";
import {
    render,
    cleanup,
    RenderResult,
    fireEvent,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";

import nock from "nock";
import waitForExpect from "wait-for-expect";
import { MemoryRouter } from "react-router";
import Routes from "components/Routes";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

//“SyntaxError: Unexpected token export” will occur because
//This means, that a file is not transformed through TypeScript compiler,
//e.g. because it is a JS file with TS syntax, or it is published to npm as uncompiled source files.
//Here's what you can do.
//https://stackoverflow.com/questions/49263429/jest-gives-an-error-syntaxerror-unexpected-token-export

//Will return IntersectionObserver is not defined error if we do not import {mockAllIsIntersecting}
//https://www.npmjs.com/package/react-intersection-observer

afterEach(cleanup);
let app: RenderResult;

beforeEach(async () => {
    mockAllIsIntersecting(true);
    app = render(
        <Root>
            <MemoryRouter initialEntries={["/"]} initialIndex={0}>
                <Routes />
            </MemoryRouter>
        </Root>
    );
});

describe("Sections that automatically appear in homepage (with path '/' ) ", () => {
    test("Shows <Header>", () => {
        expect(app.getByAltText("header dreamworks logo")).toBeInTheDocument();
    });

    test("Shows <Banner> ", () => {
        expect(app.getByTestId("homeBannerCarousel")).toBeInTheDocument();
    });

    test("Shows <Body> ", () => {
        expect(app.getByTestId("bodyContent")).toBeInTheDocument();
    });

    test("Shows <MovieCarousel> ", () => {
        expect(app.getByTestId("movieCarousel")).toBeInTheDocument();
    });

    test("Shows '<AboutCarousel>' ", () => {
        expect(app.getByTestId("aboutCarousel")).toBeInTheDocument();
    });

    test("Shows 'thank you section'", () => {
        expect(
            app.getByText("Thanks for checking us out!")
        ).toBeInTheDocument();
    });

    test("Shows <Footer>", () => {
        expect(app.getByAltText("dreamworks footer logo")).toBeInTheDocument();
    });
});

describe("Slider functionality ", () => {
    let scope: nock.Scope;
    let mockData: any;
    beforeEach(() => {
        mockData = [
            {
                id: 1,
                title: "Trolls: World Tour",
                poster: "POSTER_LINK",
                movie_name_for_url: "trolls-wold-tour",
                banner_image: "BANNER_IMAGE_LINK",
                banner_video: "BANNER_VIDEO.mp4",
            },
            {
                id: 3,
                title: "The Croods: A New Age",
                poster: "POSTER_LINK",
                movie_name_for_url: "croods-2",
                banner_image: "BANNER_IMAGE_LINK",
                banner_video: "BANNER_VIDEO.mp4",
            },
            {
                id: 4,
                title: "Abominable",
                poster: "POSTER_LINK",
                movie_name_for_url: "abominable",
                banner_image: "BANNER_IMAGE_LINK",
                banner_video: "BANNER_VIDEO.mp4",
            },
            {
                id: 5,
                title: "How to Train Your Dragon: The Hidden World",
                poster: "POSTER_LINK",
                movie_name_for_url: "how-to-train-your-dragon-the-hidden-world",
                banner_image: "BANNER_IMAGE_LINK",
                banner_video: "BANNER_VIDEO.mp4",
            },
        ];
        scope = nock("http://localhost:5000/")
            .get("/movies")
            .reply(200, mockData, { "Access-Control-Allow-Origin": "*" });
    });
    test("Load <Banner> and <MovieCarousel> with movies data from the database", async () => {
        await waitForExpect(() => {
            if (!scope.isDone()) {
                console.error("pending mocks: %j", scope.pendingMocks());
            }
            expect(scope.isDone()).toBe(true);

            expect(app.getAllByText("Trolls: World Tour").length).toEqual(2);
        });
    }, 30000);

    test("Shows image for <Banner> when viewport width is < 768px.", async () => {
        Object.defineProperty(window, "innerWidth", {
            writable: true,
            configurable: true,
            value: 768,
        });
        window.dispatchEvent(new Event("resize"));
        expect(window.innerWidth).toBe(768);
        await waitForExpect(() => {
            // Change the viewport to 768px.
            //Note: Make sure it's the same as the viewports defined in scss/utilities/_variables
            //https://stackoverflow.com/questions/60396600/set-size-of-window-in-jest-and-jest-dom-and-jsdom

            if (!scope.isDone()) {
                console.error("pending mocks: %j", scope.pendingMocks());
            }
            expect(scope.isDone()).toBe(true);
            expect(app.getAllByAltText("movie scene").length).toBeGreaterThan(
                0
            );
        });
    }, 30000);

    test("Shows video for <Banner> when viewport width is > 768px.", async () => {
        Object.defineProperty(window, "innerWidth", {
            writable: true,
            configurable: true,
            value: 800,
        });
        window.dispatchEvent(new Event("resize"));
        expect(window.innerWidth).toBe(800);
        await waitForExpect(() => {
            if (!scope.isDone()) {
                console.error("pending mocks: %j", scope.pendingMocks());
            }
            expect(scope.isDone()).toBe(true);
            expect(app.getByTitle("Trolls: World Tour")).toBeInTheDocument();
        });
    }, 30000);
});
