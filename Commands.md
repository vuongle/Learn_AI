## venv

Used to create a Virtual Environment for a project. A Virtual Environment is a folder that contains all the packages (dependencies) that are installed for a project. This is useful because it allows you to install packages without affecting the packages installed on your system.

```
python3 -m venv <env name>
```

## Activate Virtual Environment

### Windows

```
.\<env name>\Scripts\activate.bat
```

### MacOS

```
source <env name>/bin/activate
```

## Install Packages from a txt file

```
pip3 install -r requirements.txt
```
