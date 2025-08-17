apiUrl="https://alfa-leetcode-api.onrender.com/"
apiUrl2="https://alfa-leetcode-api.onrender.com/userProfile/"

async function getdata(){
    let username=document.querySelector(".names").value

    let response2=await fetch(apiUrl2+username)
    let data2=await response2.json()
    console.log(data2)

    let response=await fetch(apiUrl+username)
    let data=await response.json()
    console.log(data)

    let img=document.querySelector(".proimg")
    img.src=data.avatar

    let uname=document.querySelector(".name")
    uname.textContent=username

    let rank=document.querySelector(".rk")
    rank.textContent=data2.ranking

    let solved=document.querySelector(".Solved")
    solved.textContent=data2.totalSolved

    let easy=document.querySelector(".eas")
    easy.textContent=data2.easySolved

    let medium=document.querySelector(".med")
    medium.textContent=data2.mediumSolved

    let hard=document.querySelector(".hrd")
    hard.textContent=data2.hardSolved

    console.log(data2.recentSubmissions[0].title)
    let rsubmit=document.querySelector(".rsol")
    rsubmit.textContent=data2.recentSubmissions[0].title

    let sub=document.querySelector(".ssub")
    sub.textContent=data2.totalSubmissions[0].submissions

    let indiv=document.querySelector(".inputdiv")
    indiv.style.display="none"

    let main=document.querySelector(".kid")
    main.style.display="block"




}