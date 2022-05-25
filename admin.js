const btnsDelete = document.querySelectorAll('.btnDelete');
btnsDelete.forEach(btnDelete => {
    btnDelete.addEventListener('click', () => {
        const confirmDelete = confirm('Desea eliminar en producto?');
        if (confirmDelete) {
            console.log('Producto eliminado!!!!')
        }
    });
});