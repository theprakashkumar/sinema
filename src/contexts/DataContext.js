import { createContext, useState } from "react";

export const DataContext = createContext();

// const data = [
//     {
//         id: "FyB5inp5r6M",
//         name: "Make money for Retirement",
//         embedId: "FyB5inp5r6M",
//         thumbnail:
//             "https://i.ytimg.com/vi/FyB5inp5r6M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALtg-7ayx3AuYlXi_lmAHyjt95rw",
//         views: "118K",
//         creator: "Wariko",
//     },
//     {   id: "j-dJizGwKJQ",
//         name: "Korena Cafe",
//         embedId: "j-dJizGwKJQ",
//         thumbnail:
//             "https://i.ytimg.com/vi/j-dJizGwKJQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjGJMia5x-5YIzPXx4lODuECpauA",
//         views: "9.9M",
//         creator: "J Desert",
//     },
//     {   id: "jo4KFCJh310&t",
//         name: "The Expresso Beans Doesn't Exist",
//         embedId: "jo4KFCJh310&t",
//         thumbnail:
//             "https://i.ytimg.com/vi/jo4KFCJh310/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtlLFmN0a2opUhHtYSvYgSgYI3pQ",
//         views: "1.2K",
//         creator: "Kyle Rowsell",
//     },
//     {   id: "5UV47f1HtXk",
//         name: "Flair 58 And Mannual",
//         embedId: "5UV47f1HtXk",
//         thumbnail:
//             "https://i.ytimg.com/vi/5UV47f1HtXk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHofFrFrf55xOmuh27rhqP1IPo1Q",
//         views: "10K",
//         creator: "Lance Hedrick",
//     },
// ];

export const DataProvider = ({ children }) => {
    const [video, setVideo] = useState([]);
    return (
        <DataContext.Provider value={{ video, setVideo }}>
            {children}
        </DataContext.Provider>
    );
};
