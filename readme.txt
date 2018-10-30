Breast cancer prediction with Machine Learning
This is a small project to test custom algorithms on the dataset for breast cancer by intregrating with a web based service.

Dataset
We have Wisconsin breast detection dataset from UCI machine learning repository. The link is https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+(Diagnostic)

Install
    Supported Python version
         - Python version used in this project: 3.5+

    Libraries used
          Pandas 0.18.0
          Numpy 1.10.4
          Matplotlib 1.5.1
          Scikit-learn 0.17.1
    
	npm modules used -
	Express
         

Code

The machine learning part has 2 files in the .ipynb format. One is the main machine learning model file and the other one is a flask file, both of which are in .ipynb format.
The Website part consists of 3 HTML files index.html , hospital.html and login.html inside des-form folder. Other files like css and js files are inside the public directory.


Run

To run the project in the terminal write,

npm start

Website is deployed at http://localhost:3000


since out of all the algorithms we have trained, the random forest algorithm is the most accurate one , so we take only its prediction as malignant(0) or benign(1). next we will host it using 
the flask web service on port http://localhost:9000/api.We will take some input data as a patient and output its predictions which will be hosted on the flask web service .

