import Root from "Root";
import React from "react";
import Body from "components/Body";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, RenderResult } from "@testing-library/react";
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

test("Shows <Body> at path / - Using MemoryRouter ", () => {
    expect(app.getByTestId("bodyContent")).toBeInTheDocument();
});

test("Load banner and movie carousel with data from the database", async () => {
    const mockData = [
        {
            id: 1,
            title: "Trolls: World Tour",
            poster:
                "https://res.cloudinary.com/du8n2aa4p/image/upload/v1602728368/dreamworks/trollsPoster.jpg",
            movie_name_for_url: "trolls-wold-tour",
            banner_image:
                "https://res.cloudinary.com/du8n2aa4p/image/upload/v1602787310/dreamworks/trollsBannerMobile.jpg",
            banner_video:
                "https://res.cloudinary.com/du8n2aa4p/video/upload/v1602787142/dreamworks/trollsBannerVid.mp4",
        },
        {
            id: 3,
            title: "The Croods: A New Age",
            poster:
                "https://res.cloudinary.com/du8n2aa4p/image/upload/v1602728368/dreamworks/theCroodsPoster.jpg",
            movie_name_for_url: "croods-2",
            banner_image:
                "https://res.cloudinary.com/du8n2aa4p/image/upload/v1602806244/dreamworks/theCroodsBannerMobile.jpg",
            banner_video:
                "https://res.cloudinary.com/du8n2aa4p/video/upload/v1602806238/dreamworks/theCroodsBannerVid.mov",
        },
        {
            id: 4,
            title: "Abominable",
            poster:
                "https://res.cloudinary.com/du8n2aa4p/image/upload/v1602728368/dreamworks/abominablePoster.jpg",
            movie_name_for_url: "abominable",
            banner_image:
                "https://res.cloudinary.com/du8n2aa4p/image/upload/v1602807946/dreamworks/abominableBannerMobile.jpg",
            banner_video:
                "https://res.cloudinary.com/du8n2aa4p/video/upload/v1602807023/dreamworks/abominableBannerVid.mp4",
        },
        {
            id: 5,
            title: "How to Train Your Dragon: The Hidden World",
            poster:
                "https://res.cloudinary.com/du8n2aa4p/image/upload/v1602728663/dreamworks/httydPoster.jpg",
            movie_name_for_url: "how-to-train-your-dragon-the-hidden-world",
            banner_image:
                "https://res.cloudinary.com/du8n2aa4p/image/upload/v1602809305/dreamworks/httydAboutMobile.jpg",
            banner_video:
                "https://res.cloudinary.com/du8n2aa4p/video/upload/v1602808555/dreamworks/httydBannerVid.mp4",
        },
    ];

    const scope = nock("http://localhost:5000/")
        .get("/movies")
        .reply(200, mockData, { "Access-Control-Allow-Origin": "*" });

    await waitForExpect(() => {
        if (!scope.isDone()) {
            console.error("pending mocks: %j", scope.pendingMocks());
        }
        expect(scope.isDone()).toBe(true);

        expect(app.getAllByText("Trolls: World Tour").length).toEqual(
            mockData.length + 1
        );
    });
}, 30000);
