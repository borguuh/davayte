import toast from "react-hot-toast"

export const emptyLink = (e: any) => {
  const url = e.currentTarget.getAttribute('href').trim()
  if (url === "") {
    e.preventDefault()
    toast("Coming Soon!", {
      icon: "🚀",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    })
  }
}

export const scrollHandler = (e: any, doSomething?: Function) => {
  e.preventDefault();
  if (doSomething) doSomething()
  const hashVal = e.currentTarget.getAttribute('href').split("/").join("")
  // @ts-ignore
  window.history.pushState(null, null, `${hashVal}`)
  document.querySelector(hashVal)?.scrollIntoView({
    behavior: 'smooth'
  });
}

const protect = async (vip: Function) => {
	let validated
	try { validated = await vip() }
	catch (e) { console.log(e); validated = { error: "failed to connect" } }
	return validated
}

export const postApiJson = async (url: string, data = {}) => await protect(async () => {
	// check token
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			// 'Common-API-Key': sessionToken ?? getSessionToken(),
		},
		body: JSON.stringify(data)
	})
	const responseJson = response.status
	return responseJson
})

export const emailURL = "https://api.emailjs.com/api/v1.0/email/send"