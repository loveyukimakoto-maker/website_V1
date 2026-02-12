
const JOB_PASSWORD = '390511'; //

function setupPasswordModal() {
    const modal = document.getElementById('passwordModal');
    const btnJob = document.getElementById('btn-job');
    const closeBtn = document.getElementById('closeModalBtn');
    const cancelBtn = document.getElementById('cancelPasswordBtn');
    const submitBtn = document.getElementById('submitPasswordBtn');
    const passwordInput = document.getElementById('passwordInput');
    const errorMsg = document.getElementById('passwordError');

    if (!modal || !btnJob) {
        console.warn('密码弹窗元素未找到，请检查HTML结构');
        return;
    }

    // 点击“求职信息”按钮：显示弹窗
    btnJob.addEventListener('click', function(e) {
        e.preventDefault();
        passwordInput.value = '';
        errorMsg.textContent = '';
        modal.style.display = 'flex';
        setTimeout(() => passwordInput.focus(), 100);
    });

    // 关闭弹窗函数
    function closeModal() {
        modal.style.display = 'none';
        errorMsg.textContent = '';
    }

    // 绑定关闭事件
    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });

    // 验证密码
    function verifyPassword() {
        const enteredPwd = passwordInput.value.trim();
        if (enteredPwd === JOB_PASSWORD) {
            window.location.href = 'resume.html'; // 跳转至简历页面（根据实际路径调整）
        } else {
            errorMsg.textContent = '❌ 密码错误，请重试';
            passwordInput.value = '';
            passwordInput.focus();
        }
    }

    submitBtn.addEventListener('click', verifyPassword);
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            verifyPassword();
        }
    });

    // 按ESC关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
}