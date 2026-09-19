import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://api.github.com/users/Shubham08042003')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data)
            })
    }, [])

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4">
            <h1>My Github</h1>

            {data && (
                <>
                    <img
                        src={data.avatar_url}
                        alt="Github profile"
                        className="w-32 mx-auto rounded-full"
                    />

                    <h2 className="text-2xl mt-4">
                        {data.name}
                    </h2>

                    <p>Username: {data.login}</p>

                    <p>Followers: {data.followers}</p>

                    <p>Following: {data.following}</p>

                    <p>Public Repositories: {data.public_repos}</p>
                </>
            )}
        </div>
    )
}

export default Github