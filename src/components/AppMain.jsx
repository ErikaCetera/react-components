import style from "./AppMain.module.css"

function AppMain() {


    return (
        <>
            <main className={style.row}>
                <div className={style.post}>

                    <div>
                        <img src="/images/mappa.jpg" alt="Mappa" />
                    </div>

                    <div>
                        <h3 className={style.m}>Mappa del malandrino</h3>
                        <p className={style.m}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa,
                            cumque deserunt dolorum distinctio porro suscipit reiciendis optio excepturi
                            saepe provident molestiae a rem et totam odio eius natus voluptatem...
                        </p>
                        <button className={style.m}>LEGGI DI PIU'</button>
                    </div>

                </div>
            </main>
        </>
    )
}

export default AppMain