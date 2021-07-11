import React from "react";


export class Bought extends React.PureComponent{
    render(){
        return(
            <section className="bought">
                <div className="container">
                    <h2>Покупки со спокойствием</h2>
                    <p> Мы очень любим наших покупателей потому и предлагаем <br/> лучшие условия для сотрудничества с нами</p>
                    <div className="bought_flex">
                        <div className="bought_flex_left">
                            <p>бесплатная доставка от 180 р</p>
                        </div>
                        <div className="bought_flex_middle">
                            <p>2 года гарантии</p>
                        </div>
                        <div className="bought_flex_right">
                            <p>30 дней для возврата</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}