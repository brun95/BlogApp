export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    author: {
        name: string;
        image: string;
    };
    comments: Comment[];
    mainImage: {
        asset: {
            url: string;
        };
    };
    description: string;
    slug: {
        current: string;
    };
    body: [object]
}

export interface Comment {
    _id: string;
    _createdAt: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    approved: boolean;
    name: string;
    comment: string;
    email: string;
    post: {
        _ref: string;
        _type: string;
    };
}