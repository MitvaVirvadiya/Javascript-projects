document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const result = document.getElementById('results');

  const BMICalculator = ({ height, weight }) => {
    if (!weight || !height) {
      throw new Error('Height and Weight are required');
    }

    const heightInMeter = height / 100;
    const bmi = weight / (heightInMeter * heightInMeter);

    return bmi.toFixed(2);
  };

  btn.addEventListener('click', (event) => {
    event.preventDefault();
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;

    const height = parseFloat(heightInput);
    const weight = parseFloat(weightInput);

    const bmi = BMICalculator({ height, weight });
    result.textContent = `BMI results: ${bmi}`;
  });
});
