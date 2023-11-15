const StringValue = "String";
const NumberValue = 22;
const BooleanValue = true;
const BigIntValue = 33n;
const SymbolValue = Symbol("symbol");
const NullVaulue = null;
const UndefinedValue = undefined;

if (typeof StringValue === "string" && 
    typeof NumberValue === "number" && 
    typeof BooleanValue === "boolean" && 
    typeof BigIntValue === "bigint" &&
    typeof SymbolValue === "symbol" &&
    typeof NullVaulue === "object" &&
    typeof UndefinedValue === "undefined"){
        console.log("скрипт содержит 7 примитивных типов данных")
    }
else {
    console.log("ошибка")
}