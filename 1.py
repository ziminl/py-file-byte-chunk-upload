




import requests

def upload_file(url, file_path, chunk_size=1024):
    with open(file_path, 'rb') as file:
        while True:
            chunk = file.read(chunk_size)
            if not chunk:
                break
            upload_chunk(url, chunk)

def upload_chunk(url, chunk):
    response = requests.post(url, data=chunk)

    if response.status_code == 200:
        print("pass")
    else:
        print("fail", response.status_code)

upload_file('http://127.0.0.1/upload', 'dir/file.exe')




