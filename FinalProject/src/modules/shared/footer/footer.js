import React from "react";
import { LinksList } from "../linkslist";


export class Footer extends React.PureComponent{
    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <div className="footer_contacts">
                        <div className="footer_adress">
                            <p>Интернет магазин <br/> Адрес: г. Минск, ул. <br/> Тимирязева, 65Б 1 этаж	</p>
                        </div>
                        <div className="footer_telephone">
                            <p>+ 375 29 123 45 67 <br/>
                            + 375 25 123 45 67 <br/>
                            fashion.com <br/>
                            info@fashion.com
                            </p>
                        </div>
                    </div>
                    <div className="footer_links">
                        <LinksList addedClass='footer_img' href='https://telegram.org/' title='Telegram'></LinksList>
                        <LinksList addedClass='footer_img' href='https://twitter.com/' title='Twitter'></LinksList>
                        <LinksList addedClass='footer_img' href='https://www.instagram.com/' title='Instagram'></LinksList>
                    </div>			
                </div>
            </footer>
        )
    }
}