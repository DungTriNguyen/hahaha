import Image from "next/image"

const FirstComponent = () => {
    return (
        <div>
            <div>
                <p>SERVICES</p>
                <h4>BRING YOUR IDEAS TO REAL WORLD</h4>
                <p>We turn your marvelous ideas to market in a very short time, but also ready for scale</p>
                <ul>
                    <li>MVP to Market</li>
                    <li>BUILD FOR SCALE</li>
                    <li>READY FOR MILLION USERS</li>
                </ul>
                <div><Image src='/rocket.svg' width={26} height={26} alt="Rocket icon"/></div>
                <div></div>
            </div>
        </div>
    )
}

export default FirstComponent