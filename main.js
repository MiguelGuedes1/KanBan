document.querySelectorAll(".KanBan-card").forEach( card => {
    
    card.addEventListener("dragstart", e =>{
        e.currentTarget.classList.add('dragging')
    })

    card.addEventListener("dragend", e =>{
        e.currentTarget.classList.remove("dragging")
    })
})

document.querySelectorAll(".Kanban-cards").forEach(column =>{
    const dragcard = document.querySelector(".KanBan-card.dragging")
    e.currentTarget.appendChild(dragcard)
})

