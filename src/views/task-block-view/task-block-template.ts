export const createTaskBlockTemplate= () => {
    return `<div class="tack-block">
            <div id="app">
                <header class="header-todo">
                    <h2 class="todo-title">What is your main goal for today?</h2>
                    <input type="text" name="text" id="text">
                    <button id="new">+</button>
                    <span class="error-message">Поле не может быть пустым</span>
                </header>
                <div id="wrapper">
                    <ul id="todo">
<!--                        <li> Tick to complete-->
<!--                            <div class="buttons">-->
<!--                                <button class="remove">&#10008;</button>-->
<!--                                <button class="complete">&#10004;</button>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li> Delete me-->
<!--                            <div class="buttons">-->
<!--                                <button class="remove">&#10008;</button>-->
<!--                                <button class="complete">&#10004;</button>-->
<!--                            </div>-->
<!--                        </li>-->
                    </ul>
            
                    <ul id="ready">
<!--                        <li> Tick to repeat-->
<!--                            <div class="buttons">-->
<!--                                <button class="remove">&#10008;</button>-->
<!--                                <button class="complete">&#10004;</button>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li> Or remove me!-->
<!--                            <div class="buttons">-->
<!--                                <button class="remove">&#10008;</button>-->
<!--                                <button class="complete">&#10004;</button>-->
<!--                            </div>-->
<!--                        </li>-->
                    </ul>
                </div>
            </div>
            </div>`;
}
