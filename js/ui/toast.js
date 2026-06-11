export function showToast(message) {

  const existingToast =
    document.querySelector(
      '.quiz__toast'
    );

  if (existingToast) {
    existingToast.remove();
  }

  const toast =
    document.createElement('div');

  toast.className =
    'quiz__toast';

  toast.textContent =
    message;

  document.body.appendChild(
    toast
  );

  requestAnimationFrame(() => {
    toast.classList.add(
      'quiz__toast--visible'
    );
  });

  setTimeout(() => {

    toast.classList.remove(
      'quiz__toast--visible'
    );

    setTimeout(() => {
      toast.remove();
    }, 250);

  }, 2500);

}