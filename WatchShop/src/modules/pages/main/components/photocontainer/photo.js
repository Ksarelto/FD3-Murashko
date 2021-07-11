import React from "react";
import { NavLink } from "react-router-dom";


export class Photo extends React.PureComponent{
    render(){
        return(
            <section className="foto">
                <div className="container">
                    <h2>Новинки</h2>
                    <div className="foto_contain">
                        <div className="foto_container left_container">
                            <div className="foto_container_left_top modal">
                                <div className="foto_modal">
                                    <NavLink to='/catalog/1' className="btn" href="../WATch/watch.html">Подробнее</NavLink>
                                </div>
                            </div>
                            <div className="foto_container_left_bottom modal">
                                <div className="foto_modal">
                                    <NavLink to='/catalog/1' className="btn" href="../BAGS/bags.html">Подробнее</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="foto_container right_container">
                            <div className="foto_container_right_top modal">
                                <div className="foto_modal">
                                    <NavLink to='/catalog/1' className="btn" href="#">Подробнее</NavLink>
                                </div>
                            </div>
                            <div className="foto_container_right_bottom">
                                <div className="foto_bags_left">
                                    <div className="foto_bags_left_top modal">
                                        <div className="foto_modal">
                                            <NavLink to='/catalog/1' className="btn" href="../All_bags/Bag_ruksak/bag_ruksak.html">Подробнее</NavLink>
                                        </div>
                                    </div>
                                    <div className="foto_bags_left_bottom modal">
                                        <div className="foto_modal">
                                            <NavLink to='/catalog/1' className="btn" href="../All_bags/Bag_mini/bag_mini.html">Подробнее</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="foto_bags_right">
                                    <div className="foto_bags_right_top modal">
                                        <div className="foto_modal">
                                            <NavLink to='/catalog/1' className="btn" href="../All_bags/Bag_bisness/bag_bisness.html">Подробнее</NavLink>
                                        </div>
                                    </div>
                                    <div className="foto_bags_right_bottom modal">
                                        <div className="foto_modal">
                                            <NavLink to='/catalog/1' className="btn" href="../All_bags/Bag_slik/bag_slik.html">Подробнее</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
