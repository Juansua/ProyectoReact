import { Link } from "react-router-dom"

function FooterLinks() {
  return (
    <section className="bg-sec-blue-100">
        <div className="container py-6 mx-auto w-[730px] flex text-left justify-between text-sec-blue-700 font-semibold darkBlue-hover">
            <div>
                <h5>Categories</h5>
                <ul className="flex flex-col gap-3 text-xs mt-4">
                        <li><Link to="/category/essence">Essence</Link></li>
                        <li><Link to="/category/mask">Mask</Link></li>
                        <li><Link to="/category/serum">Serum</Link></li>
                        <li><Link to="/category/toner">Toner</Link></li>
                        <li><Link to="/category/moisturizer">Moisturizer</Link></li>
                        <li><Link to="/category/cleanser">Cleanser</Link></li>
                        <li><Link to="/category/sunscreen">Sunscreen</Link></li>
                </ul>
            </div>

            <div>
                <h5>Our Website</h5>
                <ul className="flex flex-col gap-3 text-xs mt-4">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop-now">Products</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                </ul>
            </div>

            <div>
                <h5>More Links</h5>
                <ul className="flex flex-col gap-3 text-xs mt-4">
                        <li><a href="">Portfolio</a></li>

                        <li><a href="https://www.linkedin.com/in/juancsuarez21/" target="_blank">LinkedIn</a></li>

                        <li><a href="">Instagram</a></li>
                </ul>
            </div>
        </div>

        <div className="bg-sec-blue-800 lightBlue-hover">
            <div className="container mx-auto text-sec-blue-100">
                <div className="flex justify-between py-7 border-b-2 border-sec-blue-100 border-opacity-30">
                    <div className="flex gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="12" fill="#E2E8F0"/>
                        <path d="M9.59829 20.1426H13.0269V13.2769H16.116L16.4554 9.86551H13.0269V8.14265C13.0269 7.91532 13.1172 7.6973 13.2779 7.53656C13.4387 7.37581 13.6567 7.28551 13.884 7.28551H16.4554V3.85693H13.884C12.7474 3.85693 11.6573 4.30846 10.8535 5.11219C10.0498 5.91592 9.59829 7.00601 9.59829 8.14265V9.86551H7.884L7.54457 13.2769H9.59829V20.1426Z" fill="#3A5668"/>
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#E2E8F0"/>
                        <path d="M8.85 4.5H15.15C17.55 4.5 19.5 6.45 19.5 8.85V15.15C19.5 16.3037 19.0417 17.4101 18.2259 18.2259C17.4101 19.0417 16.3037 19.5 15.15 19.5H8.85C6.45 19.5 4.5 17.55 4.5 15.15V8.85C4.5 7.69631 4.9583 6.58987 5.77409 5.77409C6.58987 4.9583 7.69631 4.5 8.85 4.5ZM8.7 6C7.98392 6 7.29716 6.28446 6.79081 6.79081C6.28446 7.29716 6 7.98392 6 8.7V15.3C6 16.7925 7.2075 18 8.7 18H15.3C16.0161 18 16.7028 17.7155 17.2092 17.2092C17.7155 16.7028 18 16.0161 18 15.3V8.7C18 7.2075 16.7925 6 15.3 6H8.7ZM15.9375 7.125C16.1861 7.125 16.4246 7.22377 16.6004 7.39959C16.7762 7.5754 16.875 7.81386 16.875 8.0625C16.875 8.31114 16.7762 8.5496 16.6004 8.72541C16.4246 8.90123 16.1861 9 15.9375 9C15.6889 9 15.4504 8.90123 15.2746 8.72541C15.0988 8.5496 15 8.31114 15 8.0625C15 7.81386 15.0988 7.5754 15.2746 7.39959C15.4504 7.22377 15.6889 7.125 15.9375 7.125ZM12 8.25C12.9946 8.25 13.9484 8.64509 14.6517 9.34835C15.3549 10.0516 15.75 11.0054 15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75C11.0054 15.75 10.0516 15.3549 9.34835 14.6517C8.64509 13.9484 8.25 12.9946 8.25 12C8.25 11.0054 8.64509 10.0516 9.34835 9.34835C10.0516 8.64509 11.0054 8.25 12 8.25ZM12 9.75C11.4033 9.75 10.831 9.98705 10.409 10.409C9.98705 10.831 9.75 11.4033 9.75 12C9.75 12.5967 9.98705 13.169 10.409 13.591C10.831 14.0129 11.4033 14.25 12 14.25C12.5967 14.25 13.169 14.0129 13.591 13.591C14.0129 13.169 14.25 12.5967 14.25 12C14.25 11.4033 14.0129 10.831 13.591 10.409C13.169 9.98705 12.5967 9.75 12 9.75Z" fill="#3A5668"/>
                        </svg>
                    </div>

                    <ul className="flex justify-center gap-8 text-sm">
                        <li><a href="">Terms and Conditions</a></li>
                        <li><a href="">Cookies Policy</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                    <div className="w-[60px]"></div>
                </div>

                <div className="flex flex-col gap-2 py-5">
                    <h5 className="uppercase text-sm">ALL RIGHTS RESERVED</h5>
                    <p className="text-xs">This website was developed by JcDev. To contact me, please reach to the “Contact Us” Section.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterLinks