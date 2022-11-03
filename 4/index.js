console.log("Задание №1")
let pass = prompt("Push пароль:" )
if ( pass.length > 4 && ( pass.includes('_') || pass.includes('-') ) )
{console.log("Power пароль")}
else
{console.log("Virgin пароль")}