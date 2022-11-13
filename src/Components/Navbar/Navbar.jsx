import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { logOut } from "../../Store/Action";


import Header from "./Header";


export function Navbar() {
    const userName = useSelector((state) => state.userName);
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(logOut());
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        {/* <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0G3e4vtkAKdudk1Gj06vG3qAN0EU8oBrqnK92Ae_kP9LLlj6hHJ6nEep6wRY0cCqvBQ&usqp=CAU" alt="" /></Link> */}
                    </div>
                </nav>
            </div>
        </>
    );
}