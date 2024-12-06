// Adiciona eventos aos cards
document.querySelectorAll(".KanBan-card").forEach(card => {
    // Quando o arrastar começa
    card.addEventListener("dragstart", e => {
        e.currentTarget.classList.add('dragging');
    });

    // Quando o arrastar termina
    card.addEventListener("dragend", e => {
        e.currentTarget.classList.remove('dragging');
    });
});

// Adiciona eventos às colunas
document.querySelectorAll(".Kanban-cards").forEach(column => {
    // Quando algo está sendo arrastado sobre a coluna
    column.addEventListener("dragover", e => {
        e.preventDefault(); // Necessário para permitir o drop
        const draggingCard = document.querySelector(".KanBan-card.dragging");
        if (draggingCard) {
            column.appendChild(draggingCard); // Adiciona o card na coluna
        }
    });

    // Quando o arrasto é concluído na coluna
    column.addEventListener("drop", e => {
        e.preventDefault();
        const draggingCard = document.querySelector(".KanBan-card.dragging");
        if (draggingCard) {
            column.appendChild(draggingCard); // Garante que o card seja adicionado corretamente
        }
    });
});

