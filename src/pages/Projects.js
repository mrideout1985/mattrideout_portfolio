import React from "react";
import styles from "./Projects.module.scss"
import Projectspage from "../../src/components/projects/Projectspage"

function Projects() {
    return (
        <div className={styles["pp"]}>
            <Projectspage />
        </div>

    );
}

export default Projects;
