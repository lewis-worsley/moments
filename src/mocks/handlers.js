import { rest } from "msw";

const baseURL = 'https://ci-drf-api-rest-197fa5ef099b.herokuapp.com/';

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user.`, (req, res, ctx) => {
        return res
            (ctx.json({
                "pk": 7,
                "username": "James",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 7,
                "profile_image":
                    "https://res.cloudinary.com/dys7tcjln/image/upload/v1/media/../default_profile_htzjeu"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200))
    })
];