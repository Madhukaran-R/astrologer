import pymysql
import threading


class DB:
    _instance = None
    _lock = threading.Lock()

    def __new__(cls):
        if not cls._instance:
            with cls._lock:  # Thread-safe initialization
                if not cls._instance:
                    cls._instance = super(DB, cls).__new__(cls)
                    cls._instance._connection = cls._create_connection()
        return cls._instance

    @staticmethod
    def _create_connection():
        return pymysql.connect(
            host="localhost",
            user="root",
            password="root",
            database="astrologger",
            cursorclass=pymysql.cursors.DictCursor
        )

    def get_connection(self):
        return self._connection

    