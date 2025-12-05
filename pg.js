
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const btn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');

    if (btn && nav) {
        btn.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }
    const checkoutForm = document.querySelector('.checkout-form');

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            
            const cardSelected = document.querySelector('input[name="card"]:checked');
            if (!cardSelected) {
                e.preventDefault(); 
                alert('الرجاء اختيار نوع البطاقة (Mastercard, Visa, JCB, Wise).');
                return;
            }
            
            const cardNumberInput = document.querySelector('input[name="card-number"]');
            const cardNumber = cardNumberInput.value.replace(/\s/g, ''); 
            if (cardNumber.length < 13 || cardNumber.length > 19) {
                e.preventDefault();
                alert('يرجى إدخال رقم بطاقة صالح (من 13 إلى 19 رقماً).');
                cardNumberInput.focus();
                return;
            }
            
            const cvcInput = document.querySelector('input[name="cvc"]');
            if (cvcInput.value.length < 3 || cvcInput.value.length > 4) {
                e.preventDefault();
                alert('يرجى إدخال رمز CVC/CVV صالح (3 أو 4 أرقام).');
                cvcInput.focus();
                return;
            }

            const expiryInput = document.querySelector('input[name="expiry"]');
            const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/; 
            if (!expiryPattern.test(expiryInput.value)) {
                e.preventDefault();
                alert('يرجى إدخال تاريخ انتهاء صلاحية صالح بالتنسيق MM/YY.');
                expiryInput.focus();
                return;
            }
        });
    }

});