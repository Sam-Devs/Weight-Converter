
function converter() {
  let get  = document.getElementById.bind(document);
  let lbsInput = get('lbs-input');
  let kgsInput = get('kgs-input');
  let convertButton = get('convert-button');
  convertButton.addEventListener('click', function() {
    kgsInput.value = (lbsInput.value * 0.4535).toFixed(2)
  });
};

converter();
