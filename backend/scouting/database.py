from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base 

DATABASE_URL = 'postgresql://ghouse:ghouse-scouting-Db22@192.168.1.17/ghouse_scouting'
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
session = Session()

Base.metadata.create_all(engine)
