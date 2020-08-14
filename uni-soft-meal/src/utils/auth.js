export default (reqURL, body, history, redirectPath) => {

        fetch(reqURL, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => 
                Promise.all([
                    res.json(),
                    res.headers.get('Authorization')
                ])
            )
        .then(([currentUser, auth]) => {

            if(currentUser && auth){
                document.cookie = `x-auth-token=${auth}`
               history.push(redirectPath)
            }

        }).catch(err => console.log(err))
}