const listGrowdevers = document.getElementById('list-growdevers')
const form = document.getElementById('form-detail-growdever')
const url = 'http://localhost:3333/growdevers'
const modalElement = document.getElementById('modal-detail-growdever')
const myModal = new bootstrap.Modal(modalElement)

function clearForm(){
    form.reset()
}

function parseStatus(status){
    switch (status) {
        case 'STUDYING':
            return 'Estudando'
        case 'CANCELED':
            return 'Cancelado'
        case 'GRADUATED':
            return 'Graduado'
    }
}

async function removeGrowdever(id){
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE'
    })

    if(response.status !== 200){
        const data = await response.json()
        alert(data.error)
        return;
    }

    loadGrowdevers()
}

async function addGrowdever(){
    const growdever = {
        name: form.name.value,
        cpf: form.document.value,
        birth: form.birth.value,
        skills: form.skills.value ? form.skills.value.split(',') : [],
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(growdever)
    })

    const data = await response.json()

    if(response.status !== 200){
        alert(data.error)
        return;
    }

    loadGrowdevers()
    myModal.hide()
    clearForm()
}

function fillPageWithCards(growdevers){
    listGrowdevers.innerHTML = ''
    for (const growdever of growdevers) {
        listGrowdevers.innerHTML += `
            <div class="col pt-3">
                <div class="card" style="width: 18rem;" >
                    <div class="gradient-custom text-center text-white pt-3 pb-1">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" style="width: 80px;" class="card-img-top">
                        <h5 class="card-title text-center pt-2">${growdever.name}</h5>
                    </div>
                    <div class="card-body">
                        <p><strong>Data de nascimento: </strong>${new Date(growdever.birth).toLocaleDateString()}</p>
                        <p><strong>CPF: </strong>${growdever.cpf}</p>
                        <p><strong>Status: </strong>${parseStatus(growdever.status)}</p>
                        <p><strong>Habilidades: </strong>${growdever.skills}</p>
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-danger me-3" onclick="removeGrowdever('${growdever.id}', this)">Remover</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

function loadGrowdevers(){
    fetch(url, {
        method: 'GET'
    }).then((response) =>{
        return response.json()
    }).then(data => {
        fillPageWithCards(data)
    })
}

document.addEventListener('DOMContentLoaded', loadGrowdevers)

modalElement.addEventListener('show.bs.modal', event => {
    document.getElementById('birth').valueAsDate = new Date();
})