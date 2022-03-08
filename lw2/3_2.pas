PROGRAM Lanterns(INPUT, OUTPUT);
USES DOS;
BEGIN {Lanterns}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  IF GetEnv('QUERY_STRING') = ''
  THEN
    WRITELN('Sarah didn''t say')
  ELSE
    BEGIN
      IF GetEnv('QUERY_STRING') = 'lanterns=1'
      THEN
        WRITELN('British are coming by land.')
      ELSE
        IF GetEnv('QUERY_STRING') = 'lanterns=2'
        THEN
          WRITELN('British are coming by sea.')
        ELSE
          WRITELN('Invalid input.')
    END
END. {Lanterns}