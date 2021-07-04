import React from "react";
import { Header } from "../../shared/header/header";
import { Slider } from './components/slider/slider'
import { Photo } from './components/photocontainer/photo';
import { Bought } from "./components/bought/bought";
import { Fashion } from "./components/fashion/fashion";
import { Footer } from '../../shared/footer/footer';
import './styles/main.css';
import './styles/media.css';


export class Main extends React.PureComponent{
    render(){
        return(
            <div>
                <Header></Header>
                <Slider></Slider>
                <Photo></Photo>
                <Bought></Bought>
                <Fashion></Fashion>
                <Footer></Footer>
            </div>
        )
    }
}