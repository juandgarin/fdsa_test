import Menu from "./menu"
import Script from "next/script";
const Wrapper = (props) => {
    return (
        <>
            <header>
                <div className="d-flex justify-content-center bg-secondary bg-gradient text-white">

                    <span>
                        Destinations App
                    </span>

                </div>
                <div className="justify-content-center bg-light bg-gradient text-white">
                    <Menu></Menu>
                </div>
                <main>
                    {props.children}
                </main>
            </header>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></Script>
        </>
    )
}

export default Wrapper;