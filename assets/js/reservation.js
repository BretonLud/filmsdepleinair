const buttons = document.querySelectorAll('.btn-reservation');
const modal = document.querySelector('#reservation');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target === button){
            const film = modal.querySelector("[name='reservation_film']");
            const card = button.closest('.card');
            const seances = card.querySelectorAll('.time-date');
            const select = modal.querySelector('select')

            if (select.children.length > 1)
            {
                let i;
                for (  i = 1; i <= select.children.length; i++){
                    const selectOption = select.children[1];

                    selectOption.remove()
                }
            }

            seances.forEach(time => {
                const collection = time.children
                const option = document.createElement('option');
                const date = collection.namedItem('date');
                const horaire = collection.namedItem('horaire');

                option.value = date.innerHTML + ': ' + horaire.innerHTML;
                option.textContent = date.innerHTML + ': ' + horaire.innerHTML;

                select.appendChild(option);

            })

            film.value = button.dataset.name
        }
    })
})