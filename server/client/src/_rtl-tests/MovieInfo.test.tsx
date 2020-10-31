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
            <MemoryRouter
                initialEntries={["/movies/:movieName"]}
                initialIndex={0}
            >
                <Routes />
            </MemoryRouter>
        </Root>
    );
});

describe("Sections that automatically appear in movie info page (with path '/movies/:movieName' ) ", () => {
    test("Shows <Header>", () => {
        expect(app.getByAltText("header dreamworks logo")).toBeInTheDocument();
    });
    // test("Shows Banner WHEN DATA IS LOADED!", () => {
    //     expect(app.getByTestId("movieInfoBanner")).toBeInTheDocument();
    // });

    test("Shows <Footer>", () => {
        expect(app.getByAltText("dreamworks footer logo")).toBeInTheDocument();
    });
});

describe("When data is loaded ", () => {
    let scope: nock.Scope;
    let mockData: any;
    beforeEach(() => {
        mockData = [
            {
                id: 1,
                title: "Trolls: World Tour",
                poster: "POSTER_LINK",
                banner_video: "BANNER_VIDEO_LINK",
                banner_image: "BANNER_IMAGE_LINK",
                logo: "LOGO_LINK",
                about_image_mobile: "ABOUT_IMAGE_MOBILE_LINK",
                about_image_desktop: "ABOUT_IMAGE_DESKTOP_LINK",
                trailer: "TRAILER",
                about: "Text input",
            },
        ];
        scope = nock("http://localhost:5000/")
            .get("/movies/:movieName")
            .reply(200, mockData, { "Access-Control-Allow-Origin": "*" });
    });

    test("Shows 'About' section when data is loaded", async () => {
        // expect(app.getByText(/about/i)).toBeInTheDocument();

        await waitForExpect(() => {
            if (!scope.isDone()) {
                console.error("pending mocks: %j", scope.pendingMocks());
            }
            expect(scope.isDone()).toBe(true);
            expect(app.getByTestId("movieInfoAbout")).toBeInTheDocument();
        });
    }, 30000);

    test("Shows 'trailer' section when data is loaded", async () => {
        // expect(app.getByText(/about/i)).toBeInTheDocument();

        await waitForExpect(() => {
            if (!scope.isDone()) {
                console.error("pending mocks: %j", scope.pendingMocks());
            }
            expect(scope.isDone()).toBe(true);
            expect(app.getByTitle("trailer")).toBeInTheDocument();
        });
    }, 30000);

    test("Check if data is loaded by checking the src of the movie logo", async () => {
        await waitForExpect(() => {
            if (!scope.isDone()) {
                console.error("pending mocks: %j", scope.pendingMocks());
            }
            expect(scope.isDone()).toBe(true);
            expect(app.getByTestId("movieInfoLogo")).toHaveAttribute(
                "src",
                mockData[0].logo
            );
        });
    }, 30000);

    test("'About Mobile Image' is shown when viewport width is < 768px", async () => {
        Object.defineProperty(window, "innerWidth", {
            writable: true,
            configurable: true,
            value: 768,
        });
        window.dispatchEvent(new Event("resize"));
        expect(window.innerWidth).toBe(768);
        await waitForExpect(() => {
            if (!scope.isDone()) {
                console.error("pending mocks: %j", scope.pendingMocks());
            }
            expect(scope.isDone()).toBe(true);
            expect(
                app.getAllByAltText("about image mobile").length
            ).toBeGreaterThan(0);
        });
    }, 30000);

    test("'About Mobile Image' is shown when viewport width is > 768px", async () => {
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
            expect(
                app.getAllByAltText("about image desktop").length
            ).toBeGreaterThan(0);
        });
    }, 30000);

    test("Shows image for <MovieInfo> banner when viewport width is < 768px.", async () => {
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
            expect(
                app.getAllByAltText("movie info banner image").length
            ).toBeGreaterThan(0);
        });
    }, 30000);

    test("Shows video for <MovieInfo> banner when viewport width is > 768px.", async () => {
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
            expect(
                app.getByTitle("movie info banner video")
            ).toBeInTheDocument();
        });
    }, 30000);
});
