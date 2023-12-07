

export default async function Fetch(url, method, token = "", body = "", fd_con_adjunto = "") {
    let response

    try {

        if (fd_con_adjunto !== "") {

            response = await fetch(url, {
                method: method,
                body: fd_con_adjunto
            })
        } else {
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
        }



        const json = await response.json()

        return json

    } catch (err) {
        console.log("error:" + err)
    }




}