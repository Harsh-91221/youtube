import React from 'react'
const commentsData = [
    {
        name: "Superman",
        text: "You slow!",
        replies: [],
    },
    {
        name: "Batman",
        text: "Got my Automobile",
        replies: [
            {
                name: "Harsh Chaudhary",
                text: "Cool",
                replies: [],
            },
            {
                name: "Harsh Chaudhary",
                text: "Bro thinks he's him",
                replies: [
                    {
                        name: "Harsh Chaudhary",
                        text: "I am Batman",
                        replies: [
                            {
                                name: "Joker",
                                text: "Did someone said Batman?",
                                replies: [
                                    {
                                        name: "Superman",
                                        text: "Lol",
                                        replies: [
                                            {
                                                name: "Batman",
                                                text: "Do you know?",
                                                replies: [],
                                            },
                                        ],
                                    },
                                    {
                                        name: "Superman",
                                        text: "I don't know",
                                        replies: [],
                                    },
                                    {
                                        name: "Batman",
                                        text: "Now you will",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "tourist",
        text: "Codeforces Div 1 was easy",
        replies: [],
    },
    {
        name: "neal wu",
        text: "Yeah completed in 20 minutes",
        replies: [],
    },
    {
        name: "Scott wu",
        text: "I got in 15 minutes",
        replies: [],
    },
    {
        name: "Harsh Chaudhary",
        text: "Nice",
        replies: [],
    },
];

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
            <img
                className="w-12 h-12"
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} />
            <div className="pl-5 border border-l-black ml-5">
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ));
};
const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments:</h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer