(this.webpackJsonpcheatsheet=this.webpackJsonpcheatsheet||[]).push([[0],{27:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),r=t(11),i=t.n(r),a=t(3),l=t(0),o=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Bienvenue sur ma cheat sheet Javascript"}),Object(l.jsx)("p",{children:"Veuillez utiliser le menu de gauche pour un rappel d'utilisation"})]})},u=t(2),d=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"text-3xl",children:"Bases"}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/consolelog",children:"Console.log"})}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/fonctions",children:"Fonctions"})}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/ifelse",children:"If / Else"})}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/ternaire",children:"Ternaire"})}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/switch",children:"Switch"})}),Object(l.jsx)("h2",{className:"text-3xl",children:"Boucles"}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/forloop",children:"For"})}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/do-while",children:"Do-While"})}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/while",children:"While"})}),Object(l.jsx)("h2",{className:"text-3xl",children:"Arrays"}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/pop",children:"Pop"})}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/shift",children:"Shift"})}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/push",children:"Push"})}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/index-array",children:"Index"})}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/filter",children:"Filter"})}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/map",children:"Reduce"})}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/map",children:"Map / ForEach"})}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/includes",children:"Includes"})}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/sort",children:"Sort"})}),Object(l.jsx)("h2",{className:"text-3xl",children:"Asynchrone"}),Object(l.jsx)("p",{className:"w-48",children:Object(l.jsx)(u.b,{className:"no-underline text-gray-500",to:"/set-timeout",children:"Set Timeout"})})]})},j=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Permet d'afficher un \xe9l\xe9ment dans la console"}),Object(l.jsx)("code",{children:'\nconsole.log("Hello World")\n'})]})},h=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Une fonction est un ensemble d'instructions menant \xe0 la r\xe9alisation d'une t\xe2che."}),Object(l.jsx)("code",{children:"\nfunction calculate(a,b){\n   return a * b;\n}\n"}),Object(l.jsx)("code",{children:"\nconst calculate = (a,b) => {\n    return a * b;\n}\n"})]})},b=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"L'instruction if ex\xe9cute une instruction si une condition donn\xe9e est vraie ou \xe9quivalente \xe0 vrai. Si la condition n'est pas v\xe9rifi\xe9e, il est possible d'utiliser une autre instruction."}),Object(l.jsx)("code",{children:'\nlet number = true;\n\nif(number) {\n    console.log("Vrai");\n} else {\n    console.log("Faux");\n}\n'})]})},x=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"L'op\xe9rateur (ternaire) conditionnel est le seul op\xe9rateur JavaScript qui comporte trois op\xe9randes. Cet op\xe9rateur est fr\xe9quemment utilis\xe9 comme raccourci pour la d\xe9claration if/else."}),Object(l.jsx)("code",{children:'\nlet IsNumber = true;\n\nIsNumber ? console.log("vrai"):console.log("faux");\n'})]})},m=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"L'instruction switch \xe9value une expression et, selon le r\xe9sultat obtenu et le cas associ\xe9, ex\xe9cute les instructions correspondantes."}),Object(l.jsx)("pre",{children:Object(l.jsx)("code",{children:'\nlet SiriusTeam = ["Jeremy","Christophe","Julie","Thomas","Laetitia","Laura"];\n\nswitch(SiriusTeam) {\n    case "Jeremy":\n        console.log("Jeremy");\n        break;\n    case "Christophe":\n        console.log("Christophe");\n        break;\n    case "Julie":\n        console.log("Julie");\n        break;\n    case "Thomas":\n        console.log("Thomas");\n        break;\n    case "Laetitia":\n        console.log("Laetitia");\n        break;\n    case "Laura":\n        console.log("Laura");\n        break;\n    default:\n        console.log("Error");\n        break;\n}\n'})})]})},p=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"L'instruction for cr\xe9e une boucle compos\xe9e de trois expressions optionnelles s\xe9par\xe9es par des points-virgules et encadr\xe9es entre des parenth\xe8ses qui sont suivies par une instruction \xe0 ex\xe9cuter dans la boucle."}),Object(l.jsx)("code",{children:'\nlet SiriusTeam = ["Jeremy","Christophe","Julie","Thomas","Laetitia","Laura"];\n\nfor(let i = 0; i < SiriusTeam.length; i++) {\n    console.log(SiriusTeam[i]);\n}\n'})]})},O=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"L'instruction do...while cr\xe9e une boucle qui ex\xe9cute une instruction jusqu'\xe0 ce qu'une condition de test ne soit plus v\xe9rifi\xe9e. La condition est test\xe9e apr\xe8s que l'instruction soit ex\xe9cut\xe9e, le bloc d'instructions d\xe9fini dans la boucle est donc ex\xe9cut\xe9 au moins une fois."}),Object(l.jsx)("code",{children:'\nlet SiriusTeam = ["Jeremy","Christophe","Julie","Thomas","Laetitia","Laura"];\nlet i = 0\n\ndo {\nconsole.log(SiriusTeam[1]);\ni++;\n} while(i < SiriusTeam.length)\n'})]})},f=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"L'instruction while permet de cr\xe9er une boucle qui s'ex\xe9cute tant qu'une condition de test est v\xe9rifi\xe9e. La condition est \xe9valu\xe9e avant d'ex\xe9cuter l'instruction contenue dans la boucle."}),Object(l.jsx)("code",{children:'\nlet SiriusTeam = ["Jeremy","Christophe","Julie","Thomas","Laetitia","Laura"];\nlet i = 0\n\nwhile (i < SiriusTeam.length)\nconsole.log(SiriusTeam[1]);\ni++;\n}\n'})]})},g=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"La m\xe9thode pop() permet de supprimer et retourner le dernier \xe9l\xe9ment d'un tableau. Elle modifie donc la valeur de la propri\xe9t\xe9 length (longueur) du tableau."}),Object(l.jsx)("code",{children:'\nlet siriusTeamArray = ["Jeremy", "Christophe", "Julie", "Thomas", "Laetitia", "Laura"];\n\nconsole.log(siriusTeamArray.pop());\n\n//output: "Laura"\n'})]})},y=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"La m\xe9thode shift permet de retirer le premier \xe9l\xe9ment du tableau et de le renvoyer, de la m\xeame mani\xe8re que se comporte la m\xe9thode pop."}),Object(l.jsx)("code",{children:'\nlet siriusTeamArray = ["Jeremy", "Christophe", "Julie", "Thomas", "Laetitia", "Laura"];\n\nconsole.log(siriusTeamArray.shift());\n\n//Output: "Jeremy"\n'})]})},v=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"La m\xe9thode push() ajoute un ou plusieurs \xe9l\xe9ments \xe0 la fin d'un tableau et retourne la nouvelle taille du tableau."}),Object(l.jsx)("code",{children:'\nlet siriusTeamArray = ["Jeremy", "Christophe", "Julie", "Thomas", "Laetitia", "Laura"];\n\nconsole.log(siriusTeamArray.length);\n\n// Output: 5\n\nconsole.log(siriusTeamArray.push("Jeremy", "Thomas"));\n\n//Output: 7\n'})]})},N=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"La m\xe9thode findIndex() renvoie l'indice du premier \xe9l\xe9ment du tableau qui satisfait une condition donn\xe9e par une fonction. Si la fonction renvoie faux pour tous les \xe9l\xe9ments du tableau, le r\xe9sultat vaut -1."}),Object(l.jsx)("code",{children:"\nconst array1 = [5, 12, 8, 130, 44];\n\nconst isLargeNumber = (element) => element > 13;\n\nconsole.log(array1.findIndex(isLargeNumber));\n// expected output: 3\n"}),Object(l.jsx)("h3",{children:"La m\xe9thode indexOf() renvoie le premier indice pour lequel on trouve un \xe9l\xe9ment donn\xe9 dans un tableau. Si l'\xe9l\xe9ment cherch\xe9 n'est pas pr\xe9sent dans le tableau, la m\xe9thode renverra -1."}),Object(l.jsx)("code",{children:"\nconst beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];\n\nconsole.log(beasts.indexOf('bison'));\n// expected output: 1\n\n// start from index 2\nconsole.log(beasts.indexOf('bison', 2));\n// expected output: 4\n\nconsole.log(beasts.indexOf('giraffe'));\n// expected output: -1\n"})]})},w=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"La m\xe9thode filter() cr\xe9e et retourne un nouveau tableau contenant tous les \xe9l\xe9ments du tableau d'origine qui remplissent une condition d\xe9termin\xe9e par la fonction callback."}),Object(l.jsx)("code",{children:'\nlet siriusTeamArray = ["jeremy", "christophe", "thomas", "laetitia", "julie", "laura"];\nlet newarray = siriusTeamArray.filter(el => el === "laetitia");\nconsole.log(newarray);\n'})]})},L=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"La m\xe9thode reduce() applique une fonction qui est un \xab accumulateur \xbb et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la r\xe9duire \xe0 une seule valeur."}),Object(l.jsx)("code",{children:"\nlet array = [1, 2, 3, 4 ,5];\n\nconst reducer = (accumulateur, valActuelle) => accumulateur+valActuelle; \n\nconsole.log(array.reduce(reducer));\n\n// output : 15\n\n"})]})},T=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"La m\xe9thode forEach() permet d'ex\xe9cuter une fonction donn\xe9e sur chaque \xe9l\xe9ment du tableau."}),Object(l.jsx)("code",{children:"\nconst array1 = ['a', 'b', 'c'];\n\narray1.forEach(element => console.log(element));\n\n"}),Object(l.jsx)("h3",{children:"La m\xe9thode map() cr\xe9e un nouveau tableau avec les r\xe9sultats de l'appel d'une fonction fournie sur chaque \xe9l\xe9ment du tableau."}),Object(l.jsx)("code",{children:"\nlet numberArray = [1, 2, 3, 4];\n\nlet byTwoArray = numberArray.map(el => el * 2);\n\nconsole.log(byTwoArray);\n\n"})]})},A=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"La m\xe9thode includes() permet de d\xe9terminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon."}),Object(l.jsx)("code",{children:'\nlet siriusTeamArray = ["jeremy", "thomas", "christophe", "laetitia", "julie", "laura"];\n\nconsole.log(siriusTeamArray.includes(\'laetitia\'));\n\n//output: true\n'})]})},J=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"La m\xe9thode sort() trie les \xe9l\xe9ments d'un tableau, dans ce m\xeame tableau, et renvoie le tableau. Par d\xe9faut, le tri s'effectue sur les \xe9l\xe9ments du tableau convertis en cha\xeenes de caract\xe8res et tri\xe9es selon les valeurs des unit\xe9s de code UTF-16 des caract\xe8res."}),Object(l.jsx)("code",{children:"\nlet sortArray = [1, 10, 3];\n\nconsole.log(sortArray.sort());\n\n//output : [1,10,3]\n"}),Object(l.jsx)("h3",{children:"Si on veut trier un tableau de nombre, il convient d\u2019utiliser la m\xe9thode suivante"}),Object(l.jsx)("code",{children:"\nlet sortArray = [1, 10, 3];\n\nconsole.log(sortArray.sort((a, b) => a - b));\n\n//output : [1,3,10]\n\n"})]})},S=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Permet d'ex\xe9cuter une fonction callback apr\xe8s un temps donn\xe9."}),Object(l.jsx)("code",{children:'\nwindow.setTimeOut(() => {\n    console.log("Hello World");\n}, 2000)\n'})]})};t(27);var q=function(){return Object(l.jsxs)("div",{className:"App text-center",children:[Object(l.jsx)("header",{className:"App-header bg-header text-white text-3xl flex flex-col",children:Object(l.jsx)("h1",{children:"Cheat Sheet JS"})}),Object(l.jsxs)("div",{className:"App-page flex",children:[Object(l.jsx)("nav",{className:"App-menu bg-white text-2xl w-1/5 h-3/4 border-r-2 text-left ml-4 overflow-y-auto",children:Object(l.jsx)(d,{})}),Object(l.jsx)("section",{className:"App-content text-left flex flex-col justify-center items-center",children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{exact:!0,path:"/",component:o}),Object(l.jsx)(a.a,{path:"/consolelog",component:j}),Object(l.jsx)(a.a,{path:"/fonctions",component:h}),Object(l.jsx)(a.a,{path:"/ifelse",component:b}),Object(l.jsx)(a.a,{path:"/ternaire",component:x}),Object(l.jsx)(a.a,{path:"/switch",component:m}),Object(l.jsx)(a.a,{path:"/forloop",component:p}),Object(l.jsx)(a.a,{path:"/do-while",component:O}),Object(l.jsx)(a.a,{path:"/while",component:f}),Object(l.jsx)(a.a,{path:"/pop",component:g}),Object(l.jsx)(a.a,{path:"/shift",component:y}),Object(l.jsx)(a.a,{path:"/push",component:v}),Object(l.jsx)(a.a,{path:"/index-array",component:N}),Object(l.jsx)(a.a,{path:"/filter",component:w}),Object(l.jsx)(a.a,{path:"/reduce",component:L}),Object(l.jsx)(a.a,{path:"/map",component:T}),Object(l.jsx)(a.a,{path:"/includes",component:A}),Object(l.jsx)(a.a,{path:"/sort",component:J}),Object(l.jsx)(a.a,{path:"/set-timeout",component:S})]})})]})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u.a,{children:Object(l.jsx)(q,{})})}),document.getElementById("root")),C()}},[[28,1,2]]]);
//# sourceMappingURL=main.f28e76b2.chunk.js.map