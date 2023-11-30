

export default async function Fetch(url, method, token = "", body = "") {
    let response

    try {

        if (body !== "") {
            response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token !== "" ? `Bearer ${token}` : ""
                },
                body: JSON.stringify(body)
            })

        } else {

            response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token ? `Bearer ${token}` : ""
                },
            })

        }

        const json = await response.json()
        console.log(json)
        return json

    } catch (err) {
        console.log("error:" + err)
    }




}