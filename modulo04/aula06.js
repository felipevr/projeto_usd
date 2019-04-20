/*
ESCOPOS MTO LOKOS

ARROW FUNCTION LOKONA
*/

const obj = {
    test: "Teste no escopo do objeto"
};

(function (obj) {

    this.test = "teste no escopo da function";

    //STATEMENT
    function statementFunction () {

        console.log(this.test);

    }

    //EXPRESSION
    const expressionFunction = function (valor) {
        console.log(this.test);
        return valor + 1;
    };

    //ARROW
    var arrowFunction = () => {
        console.log(this.test);
    };

    //ARROW 2
    var arrowFunction2 = valor => expressionFunction(valor);

    obj.statementFunction = statementFunction;
    obj.expressionFunction = expressionFunction;
    obj.arrowFunction = arrowFunction;
    obj.arrowFunction2 = arrowFunction2;
})(obj);

//teste();

//nomeDaFuncao2();


obj.statementFunction();
obj.expressionFunction();
obj.arrowFunction();
console.log(obj.arrowFunction2(2));