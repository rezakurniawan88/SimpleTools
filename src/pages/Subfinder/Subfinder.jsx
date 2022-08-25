import React from "react";
import "./Subfinder.css";

function Subfinder() {

    function searchSubdomain() {
        const url = "https://api.hackertarget.com/hostsearch/?q";
        const params = {
            method: "GET",
            redirect: "follow"
        }
        const domain = document.getElementById("domain").value;
        document.querySelector(".loading").style.display = "flex";

        fetch(`${url}=${domain}`, params)
        .then((res) => res.text())
        .then((res) => {
            document.getElementById("results").innerHTML = `<p class="dark:text-[#ccd6f6]">${res}</p>`;
            document.querySelector(".loading").style.display = "none";
        })
        .catch((error) => console.log(error))
    }

    return (
        <div className="subfinder flex flex-col items-center w-[80%] md:w-[60%] m-auto">
            <h1 className="text-center my-8 text-2xl md:text-3xl dark:text-[#ccd6f6] font-bold">Subdomain Finder</h1>
            <div class="content w-full md:w-2/3">
                <p className="py-2 dark:text-[#ccd6f6]">Masukkan domain anda</p>
                <div class="domain-content flex">
                    <input type="text" id="domain" name="domain" placeholder="google.com" className="w-full p-3 border border-green-500 rounded-[0.5rem] pl-4 text-sm focus:outline-none"/><br/>
                    <button onClick={searchSubdomain} className="w-32 ml-4 py-[0.6rem] rounded-[1.5rem] text-sm font-bold bg-green-500 text-white">Search</button>
                </div>
            </div>

            <div class="results-content my-8 md:w-2/3">
                <h4 className="font-bold dark:text-[#ccd6f6]">Result</h4>
                <div id="results">
                </div>
            </div>
            <div class="loading">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
            </div>
        </div>
    )
}

export default Subfinder;