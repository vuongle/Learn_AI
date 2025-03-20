## venv

Used to create a Virtual Environment for a project. A Virtual Environment is a folder that contains all the packages (dependencies) that are installed for a project. 
This is useful because it allows you to install packages without affecting the packages installed on your system.

```
python3 -m venv <env name>
```

### Activate Virtual Environment

#### Windows

```
.\<env name>\Scripts\activate.bat
```

#### MacOS

```
source <env name>/bin/activate
```

### Install libraries
```
pip3 install requests <lib-name>
```

### Create file requirements.txt
```
pip freeze > requirements.txt
```

### Install Packages from requirements file

```
pip3 install -r requirements.txt
```

If after running above command, packages are not shown in site_packes, do the following:
- Re-select the Python Interpreter
- Run one of the following command
```
python -m pip install -r requirements.txt
or
pip install --no-cache-dir -r requirements.txt
```

### Exit virtual environment
deactivate
