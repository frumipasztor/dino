function pageLoad() {
    const dino = document.getElementById("dino");
    const rock = document.getElementById("rock");
    const score = document.getElementById("score");
    const button = document.getElementById("start");

    button.addEventListener("click", startGame);

    function startGame() {
        rock.classList.add("rock_animation");

        // Dinó-ra class adáshogy ugorjon
        function jump() {
            dino.classList.add("jump-animation");
            setTimeout(() => {
                dino.classList.remove("jump-animation");
            }, 500);
        }

        // Ha lenyomjuk a gombot és rajta van az adott class akkor meghívja a jump függvényt
        document.addEventListener("keydown", function (event) {
            if (
                !dino.classList.contains("jump-animation") &&
                event.key === "ArrowUp"
            ) {
                jump();
            }
        });

        let dinoLeft = parseInt(
            window.getComputedStyle(dino).getPropertyValue("left")
        );

        // Dínó mozgatása
        document.addEventListener("keydown", function (event) {
            if (event.key === "ArrowLeft" && dinoLeft > 50) {
                dinoLeft -= 50;
                dinoLeft += "px";
                dino.style.left = dinoLeft;

                dinoLeft = parseInt(
                    window.getComputedStyle(dino).getPropertyValue("left")
                );
            } else if (event.key === "ArrowRight" && dinoLeft < 900) {
                dinoLeft += 50;
                dinoLeft += "px";
                dino.style.left = dinoLeft;

                dinoLeft = parseInt(
                    window.getComputedStyle(dino).getPropertyValue("left")
                );
            }
        });

        // Fél század másodpercenként mehívja az adott dolgokat és növeli a pontot
        setInterval(() => {
            // Lekéri a dino és a kő aktuális helyzetét
            const dinoTop = parseInt(
                window.getComputedStyle(dino).getPropertyValue("top")
            );
            const rockLeft = parseInt(
                window.getComputedStyle(rock).getPropertyValue("left")
            );
            dinoLeft = parseInt(
                window.getComputedStyle(dino).getPropertyValue("left")
            );
            //console.log(dinoLeft);

            if (rockLeft < 0) {
                rock.style.display = "none";
            } else {
                rock.style.display = "";
            }

            //le kell ellenőrizni, hogy a rock a dinosaurusba esik-e
            let rock_pos = dinoLeft;
            let rock_pos_2 = dinoLeft + 50;

            if (rockLeft < rock_pos_2 && rockLeft > rock_pos && dinoTop > 450) {
                alert("Your score is " + score.innerText + "\n\n Play again?");
                location.reload();
            }
        }, 20);

        setInterval(() => {
            score.innerText++;

            let level = document.querySelector("#level");

            // Nehézségi szintek
            if (score.innerText > 100) {
                rock.style.animationDuration = "3.8s";
                level.textContent = "Level 1";
            }
            if (score.innerText > 150) {
                rock.style.animationDuration = "3.5s";
                level.textContent = "Level 2";
            }
            if (score.innerText > 200) {
                rock.style.animationDuration = "3.2s";
                level.textContent = "Level 3";
            }
            if (score.innerText > 250) {
                rock.style.animationDuration = "3s";
                level.textContent = "Level 4";
            }
            if (score.innerText > 300) {
                rock.style.animationDuration = "2.8s";
                level.textContent = "Level 5";
            }
            if (score.innerText > 350) {
                rock.style.animationDuration = "2.6s";
                level.textContent = "Level 6";
            }
            if (score.innerText > 400) {
                rock.style.animationDuration = "2.3s";
                level.textContent = "Level 7";
            }
            if (score.innerText > 450) {
                rock.style.animationDuration = "2s";
                level.textContent = "Level 8";
            }
            if (score.innerText > 500) {
                rock.style.animationDuration = "1.8s";
                level.textContent = "Level 9";
            }
            if (score.innerText > 550) {
                rock.style.animationDuration = "1.5s";
                level.textContent = "Level 10";
            }
            if (score.innerText > 600) {
                rock.style.animationDuration = "1.3s";
                level.textContent = "Level 11";
            }
            if (score.innerText > 1000) {
                rock.style.animationDuration = "1.3s";
                level.textContent = "YOU WIN!";
            }
        }, 80);
    }
}

window.addEventListener("load", pageLoad);
