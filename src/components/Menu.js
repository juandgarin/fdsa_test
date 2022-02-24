import Link from "next/link";
import Image from "next/image";
const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <h4 className="navbar-brand" href="#">
                        <Image text="white" src="/Destination_logo.png" alt="logo" width="75px" height="75px"/>

                    </h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link href='/'>
                                <a className="nav-link active p-2" aria-current="page" href="#">Home</a>
                            </Link>
                            <Link href='/module1'>
                                <a className="nav-link active" aria-current="page" href="#">Module 1</a>
                            </Link>
                            <Link href='/module2'>
                                <a className="nav-link active" aria-current="page" href="#">Module 2</a>
                            </Link>
                            <Link href='/module3'>
                                <a className="nav-link active" aria-current="page" href="#">Module 3</a>
                            </Link>
                            <Link href='/module4'>
                                <a className="nav-link active" aria-current="page" href="#">Module 4</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu;
