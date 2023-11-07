CREATE TABLE IF NOT EXISTS Format(
    fid     INT             NOT NULL AUTO_INCREMENT,    # 식별번호
    name    VARCHAR(60)     NOT NULL UNIQUE,            # 형식 이름 (대체키)
    PRIMARY KEY(fid)
);