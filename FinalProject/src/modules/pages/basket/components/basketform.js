import React from "react";


export class BasketForm extends React.PureComponent{
    render(){
        return(
            <section className="order">
                <form className='order-form' name='order-form'>
                    <section class="basket_form_group">
                        <div class="container">
                            <h2>Оформление заказа</h2>
                            <div class="all_forms">
                                <div class="left_form">
                                        <label>*Телефон</label>
                                        <input type="phone" name="phone" placeholder="+374 29 123 45 67"/>
                                        <label>*Населенный пункт</label>
                                        <input type="text" name="text" placeholder="Минск"/>
                                        <label>*Адрес</label>
                                        <div class="form_group">
                                            <input type="text" name="text" placeholder="Улица"/>
                                            <input type="text" name="home" placeholder="Дом"/>
                                            <input type="text" name="kv" placeholder="Кв"/>
                                        </div>
                                        <label>*Имя</label>
                                        <input type="text" name="name" placeholder="Елена"/>
                                </div>
                                <div class="right_form">
                                        <label>*Время доставки</label>
                                        <div class="form_group_right">
                                            <input type="date" name="date" placeholder="Воскресенье, 20 сентября"/>
                                            <select>
                                                <option>8.00-10.00</option>
                                                <option>10.00-16.00</option>
                                                <option>16.00-18.00</option>
                                            </select>
                                        </div>
                                        <label>Электронная почта</label>
                                        <input type="email" name="email" placeholder="elena@gmail.com"/>
                                        <label>Комментарий</label>
                                        <textarea></textarea>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="payment">
                        <div class="container">
                            <h2>Доставка и оплата</h2>
                            <div class="payment_choose">
                                <div class="delivery">
                                    <div class="delivery_block">
                                        <p>Бесплатная доставка по Беларуси при заказе от 180 р</p>
                                        <p>Стоимость доставки: <span>5 р</span></p>
                                    </div>
                                </div>
                                <div class="pay_way">
                                    <h3>Способ оплаты:</h3>
                                    <div class="radio_top">
                                        <input checked type="radio" name="pay"/>
                                        <label>Оплата при получении</label>
                                    </div>
                                    <div class="radio_bottom">
                                        <input type="radio" name="pay"/>
                                        <label>Предоплата (картой онлайн, ЕРИП)</label>
                                    </div>
                                </div>
                            </div>
                            <div class="payment_button">
                                <button type="submit">Оформить заказ</button>
                            </div>
                        </div>
                    </section>
                </form>
            </section>
        )
    }
}
