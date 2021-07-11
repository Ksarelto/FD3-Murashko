import React from "react";


export class Fashion extends React.PureComponent{
    render(){
        return(
            <section className="fashion">
                <div className="container">
                    <h2>Принципы Fashion</h2>
                    <div className="fashion_flex">
                        <div className="fashion_flex_left">
                            <div className="fashion_flex_top"></div>
                            <div className="fashion_flex_bottom">
                                <h3>Невероятная ценность</h3>
                                <p>Мы продаем напрямую нашим клиентам продукцию всего лишь за небольшую часть стоимости традиционных предметов роскоши</p>
                            </div>
                        </div>
                        <div className="fashion_flex_middle">
                            <div className="fashion_flex_top"></div>
                            <div className="fashion_flex_bottom">
                                <h3>Только лучшие материалы</h3>
                                <p>Мы продаем напрямую нашим клиентам продукцию всего лишь за небольшую часть стоимости традиционных предметов роскоши</p>
                            </div>
                        </div>
                        <div className="fashion_flex_right">
                            <div className="fashion_flex_top"></div>
                            <div className="fashion_flex_bottom">
                                <h3>Последние штрихи</h3>
                                <p>Мы продаем напрямую нашим клиентам продукцию всего лишь за небольшую часть стоимости традиционных предметов роскоши</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}