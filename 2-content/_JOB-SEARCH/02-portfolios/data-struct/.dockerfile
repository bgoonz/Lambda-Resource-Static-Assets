FROM docker.elastic.co/elasticsearch/elasticsearch:7.10.2
COPY --chown=elasticsearch:elasticsearch elasticsearch.yml /usr/share/elasticsearch/config/
