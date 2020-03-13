import { walk, go } from "./module.js";

import createElement, { walk as walkCreateElement} from "./create-element";
import style from './styles/style.css'

walk();
go();
walkCreateElement()
console.log("Hey you");
console.log('asdas')

createElement('asdas');
