import {ReactComponent as FillOutImage} from "./1.svg";

export function Instruction() {
    return (
        <section className="bg-dark text-light p-5 text-center text-sm-start">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div className="mr-3">
                        <h1>
                            Register for
                            <span className="text-warning"> The NZPMC 2022</span>
                        </h1>
                        <p className="lead my-4">
                            The NZPMC is a nationwide standardised Physics and Mathematics
                            Competition for High School students of all year levels throughout
                            New Zealand.
                        </p>
                    </div>
                    <FillOutImage className="img-fluid w-50 d-none d-sm-block"/>
                </div>
            </div>
        </section>
    )
}